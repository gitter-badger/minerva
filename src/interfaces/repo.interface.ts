export interface RepoInterface {
    addAll(): Promise<string>;

    commit(title: string, description?: string, options?: string[]): Promise<string>;

    push(): Promise<string>;
}