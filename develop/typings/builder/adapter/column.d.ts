import { EAdvancedSortMethod, ICategoricalColumnDesc, ICategory, IColumnDesc, IDateColumnDesc, IHierarchyColumnDesc, INumberColumnDesc, IPartialCategoryNode, IStringColumnDesc } from '../../model';
export interface IBuilderAdapterColumnDescProps extends Partial<IColumnDesc> {
    column: string;
    asMap?: boolean;
    asArray?: string[] | number | boolean;
    custom?: {
        [key: string]: any;
    };
}
export declare function build<T extends IBuilderAdapterColumnDescProps>(props: T, _data?: any[]): IColumnDesc;
export interface IBuilderAdapterCategoricalColumnDescProps extends IBuilderAdapterColumnDescProps {
    asOrdinal?: boolean;
    categories?: (string | Partial<ICategory>)[];
    missingCategory?: (string | Partial<ICategory>);
    asSet?: boolean | string;
}
export declare function buildCategorical(props: IBuilderAdapterCategoricalColumnDescProps, data: any[]): ICategoricalColumnDesc;
export interface IBuilderAdapterDateColumnDescProps extends IBuilderAdapterColumnDescProps {
    dateFormat?: string;
    dateParse?: string;
}
export declare function buildDate(props: IBuilderAdapterDateColumnDescProps): IDateColumnDesc;
export interface IBuilderAdapterHierarchyColumnDescProps extends IBuilderAdapterColumnDescProps {
    hierarchy: IPartialCategoryNode;
    hierarchySeparator?: string;
}
export declare function buildHierarchy(props: Partial<IBuilderAdapterHierarchyColumnDescProps>): IHierarchyColumnDesc;
export interface IBuilderAdapterNumberColumnDescProps extends IBuilderAdapterColumnDescProps {
    domain?: [number, number];
    range?: [number, number];
    mapping?: 'linear' | 'sqrt' | 'pow1.1' | 'pow2' | 'pow3';
    scripted?: string;
    sort?: EAdvancedSortMethod;
}
export declare function buildNumber(props: IBuilderAdapterNumberColumnDescProps, data: any[]): INumberColumnDesc;
export interface IBuilderAdapterStringColumnDescProps extends IBuilderAdapterColumnDescProps {
    editable?: boolean;
    html?: boolean;
    pattern?: string;
    patternTemplates?: string[];
}
export declare function buildString(props: IBuilderAdapterStringColumnDescProps): IStringColumnDesc;