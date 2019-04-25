import { INestedBuilder, IReduceBuilder, IScriptedBuilder, IWeightedSumBuilder } from '..';
import { Ranking } from '../../model';
import { LocalDataProvider } from '../../provider';
import { IBuilderAdapterImposeColumnProps, IBuilderAdapterNestedColumnProps, IBuilderAdapterRankingProps, IBuilderAdapterReduceColumnProps, IBuilderAdapterScriptColumnProps, IBuilderAdapterSupportColumnProps, IBuilderAdapterWeightedSumColumnProps } from '.';
export declare function buildRanking(props: IBuilderAdapterRankingProps, data: LocalDataProvider): Ranking;
export declare function buildGeneric(props: {
    column: '*' | string;
}): string;
export declare function buildImposeRanking(props: IBuilderAdapterImposeColumnProps): any;
export declare function buildNestedRanking(props: IBuilderAdapterNestedColumnProps, children: string[]): INestedBuilder;
export declare function buildWeightedSumRanking(props: IBuilderAdapterWeightedSumColumnProps, children: {
    column: string;
    weight: number;
}[]): IWeightedSumBuilder;
export declare function buildReduceRanking(props: IBuilderAdapterReduceColumnProps, children: string[]): IReduceBuilder;
export declare function buildScriptRanking(props: IBuilderAdapterScriptColumnProps, children: string[]): IScriptedBuilder;
export declare function buildSupportRanking(props: IBuilderAdapterSupportColumnProps): string;
export declare function buildAllColumnsRanking(): string;