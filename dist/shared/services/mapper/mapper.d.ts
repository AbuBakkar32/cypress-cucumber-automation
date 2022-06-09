declare type FilteredKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export declare type Mapper<S, D> = {
    [DK in keyof D]?: FilteredKeys<S, D[DK]> | ((source: S) => D[DK]);
};
export {};
