import { ISequence } from '../internal';
import { Column, EDirtyReason, Ranking, IColumnDesc, IDataRow, IGroup, IndicesArray, INumberColumn, IOrderedGroup } from '../model';
import ACommonDataProvider from './ACommonDataProvider';
import { IDataProviderOptions } from './interfaces';
import { IRenderTaskExectutor } from './tasks';
export interface ILocalDataProviderOptions {
    /**
     * whether the filter should be applied to all rankings regardless where they are
     * default: false
     */
    filterGlobally: boolean;
    /**
     * jump to search results such that they are visible
     * default: false
     */
    jumpToSearchResult: boolean;
    /**
     * specify the task executor to use direct = no delay, scheduled = run when idle
     */
    taskExecutor: 'direct' | 'scheduled';
}
/**
 * a data provider based on an local array
 */
export default class LocalDataProvider extends ACommonDataProvider {
    private _data;
    private readonly options;
    private readonly reorderAll;
    private _dataRows;
    private filter;
    private readonly tasks;
    constructor(_data: any[], columns?: IColumnDesc[], options?: Partial<ILocalDataProviderOptions & IDataProviderOptions>);
    /**
     * set a globally applied filter to all data without changing the data source itself
     * @param {((row: IDataRow) => boolean) | null} filter
     */
    setFilter(filter: ((row: IDataRow) => boolean) | null): void;
    getFilter(): ((row: IDataRow) => boolean) | null;
    getTotalNumberOfRows(): number;
    getTaskExecutor(): IRenderTaskExectutor;
    readonly data: any[];
    destroy(): void;
    /**
     * replaces the dataset rows with a new one
     * @param data
     */
    setData(data: any[]): void;
    private dataChanged();
    clearData(): void;
    /**
     * append rows to the dataset
     * @param data
     */
    appendData(data: any[]): void;
    cloneRanking(existing?: Ranking): Ranking;
    private trackRanking(ranking, existing?);
    cleanUpRanking(ranking: Ranking): void;
    private resolveFilter(ranking);
    private noSorting(ranking);
    private createSorter(ranking, filter, needsFiltering, needsGrouping, needsSorting);
    private sortGroup(g, i, ranking, lookups, groupLookup, singleGroup, maxDataIndex);
    private sortGroups(groups, groupLookup);
    private index2pos(groups, maxDataIndex);
    sort(ranking: Ranking, dirtyReason: EDirtyReason[]): {
        groups: ({
            order: Uint8Array | Uint16Array | Uint32Array;
        } & IGroup)[];
        index2pos: Uint8Array | Uint16Array | Uint32Array;
    } | Promise<{
        groups: IOrderedGroup[];
        index2pos: Uint8Array | Uint16Array | Uint32Array;
    }> | {
        groups: never[];
        index2pos: never[];
    };
    private readonly mapToDataRow;
    viewRaw(indices: IndicesArray): any[];
    viewRawRows(indices: IndicesArray): IDataRow[];
    getRow(index: number): IDataRow;
    seq(indices: IndicesArray): ISequence<IDataRow>;
    view(indices: IndicesArray): any[];
    mappingSample(col: INumberColumn): ISequence<number>;
    searchAndJump(search: string | RegExp, col: Column): void;
}