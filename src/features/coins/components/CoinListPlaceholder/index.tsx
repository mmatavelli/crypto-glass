import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export function CoinListPlaceholder() {
  const { spacing } = useTheme();

  return (
    <Container
      contentContainerStyle={{
        paddingVertical: spacing[4],
      }}
    >
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          marginBottom={spacing[4]}
          paddingHorizontal={spacing[3]}
        >
          <SkeletonPlaceholder.Item
            width={60}
            height={40}
            borderRadius={11}
            marginRight={spacing[2]}
          />
          <SkeletonPlaceholder.Item width={60} height={40} borderRadius={11} />
        </SkeletonPlaceholder.Item>
        {
          <>
            {Array.from({ length: 10 }).map((_, index) => (
              <SkeletonPlaceholder.Item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                flexDirection="row"
                alignItems="center"
                paddingHorizontal={spacing[3]}
                marginBottom={spacing[3]}
              >
                <SkeletonPlaceholder.Item
                  width={60}
                  height={60}
                  borderRadius={11}
                  marginRight={spacing[3]}
                />
                <SkeletonPlaceholder.Item>
                  <SkeletonPlaceholder.Item
                    width={60}
                    height={24}
                    borderRadius={4}
                    marginBottom={spacing[2]}
                  />
                  <SkeletonPlaceholder.Item
                    width={80}
                    height={18}
                    borderRadius={4}
                  />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item
                  marginLeft="auto"
                  alignItems="flex-end"
                >
                  <SkeletonPlaceholder.Item
                    width={120}
                    height={24}
                    borderRadius={4}
                    marginBottom={spacing[2]}
                  />
                  <SkeletonPlaceholder.Item
                    width={50}
                    height={18}
                    borderRadius={4}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            ))}
          </>
        }
      </SkeletonPlaceholder>
    </Container>
  );
}
