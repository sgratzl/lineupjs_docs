import CompositeColumn from './CompositeColumn';
import { IDataRow, IGroup, IColumnDesc } from './interfaces';
import { ISequence } from '../internal';
import { INumberColumn } from './INumberColumn';
export interface ICompositeNumberDesc extends IColumnDesc {
    /**
     * d3 format number Format
     * @default 0.3n
     */
    numberFormat?: string;
}
export declare type ICompositeNumberColumnDesc = ICompositeNumberDesc & IColumnDesc;
/**
 * implementation of a combine column, standard operations how to select
 */
export default class CompositeNumberColumn extends CompositeColumn implements INumberColumn {
    private readonly numberFormat;
    constructor(id: string, desc: Readonly<ICompositeNumberColumnDesc>);
    getNumberFormat(): (n: number) => string;
    getLabel(row: IDataRow): string;
    getValue(row: IDataRow): number | null;
    protected compute(_row: IDataRow): number;
    getNumber(row: IDataRow): number;
    getRawNumber(row: IDataRow): number;
    iterNumber(row: IDataRow): number[];
    iterRawNumber(row: IDataRow): number[];
    getExportValue(row: IDataRow, format: 'text' | 'json'): any;
    toCompareValue(row: IDataRow): any;
    toCompareValueType(): any;
    toCompareGroupValue(rows: ISequence<IDataRow>, group: IGroup): any;
    toCompareGroupValueType(): any;
    getRenderer(): string;
}