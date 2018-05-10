export interface RepoInterface {
  addAll(): Promise<string>;

  commit(
    title: string,
    description?: string,
    options?: string[],
  ): Promise<string>;

  /**
   * Pulls the latest changes for the current branch
   *
   * @returns {Promise<void>}
   */
  pull(): Promise<string>;

  checkout(branchName: string): Promise<string>;

  /**
   * Creates a new branch with the given name from master or a specified branch.
   * @param {string} branchName
   * @param {string} from
   */
  createBranch(branchName: string, from?: string): Promise<string>;

  /**
   * Merges a specified branch or master into the current branch or a specified one.
   *
   * @param {string} to
   * @param {string} from
   */
  mergeIn(from?: string, to?: string): Promise<string>;

  /**
   * Merges the current branch, or a specified one, into another branch.
   *
   * @param {string} to
   * @param {string} from
   */
  mergeOut(to: string, from?: string): Promise<string>;

  push(): Promise<string>;
}
