
    export type RemoteKeys = 'example/Button' | 'example/$application';
    type PackageType<T> = T extends 'example/$application' ? typeof import('example/$application') :T extends 'example/Button' ? typeof import('example/Button') :any;