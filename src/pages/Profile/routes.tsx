import { Path, PathBuilder } from 'app/utils/routes';

export const paths = (({ slug, id }: { slug?: string | null; id?: string }) => {
  const path = new Path(`/users/${slug ?? id}`);

  return {
    toString: () => path,
    reactions: () => new Path(`${path}/reactions`),
    reviews: () => new Path(`${path}/reviews`),
    followers: () => new Path(`${path}/followers`),
    following: () => new Path(`${path}/following`),
    groups: () => new Path(`${path}/groups`),
    library: (type: string) => new Path(`${path}/library/${type}`),
  };
}) satisfies PathBuilder;
