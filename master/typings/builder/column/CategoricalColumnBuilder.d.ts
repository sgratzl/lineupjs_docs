import { ICategoricalColumnDesc, ICategory } from '../../model';
import ColumnBuilder from './ColumnBuilder';
export default class CategoricalColumnBuilder extends ColumnBuilder<ICategoricalColumnDesc> {
    constructor(column: string);
    asOrdinal(): this;
    categories(categories: (string | Partial<ICategory>)[]): this;
    missingCategory(missingCategory: (string | Partial<ICategory>)): this;
    asSet(separator?: string): this;
    private derive(data);
    build(data: any[]): ICategoricalColumnDesc;
}
export declare function buildCategoricalColumn(column: string, categories?: (string | Partial<ICategory>)[]): CategoricalColumnBuilder;
