import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

import { Alert } from '../Alert';
import { Container } from './styles';

type SnackbarProps = {
  visible?: boolean;
  duration?: number;
  severity?: 'success' | 'info' | 'warning' | 'error';
  children: string;
  style?: StyleProp<ViewStyle> | undefined;
  onDismiss: () => void;
};

const scale = 1.0;

export const Snackbar = memo(
  ({
    visible,
    duration = 7000,
    severity,
    children,
    onDismiss,
    ...rest
  }: SnackbarProps) => {
    const { current: opacity } = useRef<Animated.Value>(
      new Animated.Value(0.0),
    );

    const [hidden, setHidden] = useState<boolean>(!visible);

    const hideTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
      return () => {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }
      };
    }, []);

    useLayoutEffect(() => {
      if (visible) {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }
        setHidden(false);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200 * scale,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished) {
            const isInfinity =
              duration === Number.POSITIVE_INFINITY ||
              duration === Number.NEGATIVE_INFINITY;

            if (finished && !isInfinity) {
              hideTimeout.current = setTimeout(
                onDismiss,
                duration,
              ) as unknown as NodeJS.Timeout;
            }
          }
        });
      } else {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
        }

        Animated.timing(opacity, {
          toValue: 0,
          duration: 100 * scale,
          useNativeDriver: true,
        }).start(({ finished }) => {
          if (finished) {
            setHidden(true);
          }
        });
      }
    }, [visible, duration, opacity, onDismiss]);

    if (hidden) {
      return null;
    }

    return (
      <Container pointerEvents="box-none">
        <Alert
          pointerEvents="box-none"
          severity={severity}
          style={
            [
              rest.style,
              {
                opacity,
                transform: [
                  {
                    scale: visible
                      ? opacity.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.9, 1],
                        })
                      : 1,
                  },
                ],
              },
            ] as StyleProp<ViewStyle>
          }
        >
          {children}
        </Alert>
      </Container>
    );
  },
);
