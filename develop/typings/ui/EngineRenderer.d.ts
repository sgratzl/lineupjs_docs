import { GridStyleManager } from 'lineupengine';
import { ILineUpOptions } from '../interfaces';
import AEventDispatcher from '../internal/AEventDispatcher';
import ADataProvider from '../provider/ADataProvider';
import { IRenderContext } from '../renderer';
import EngineRanking, { IEngineRankingContext } from './EngineRanking';
import { IRankingHeaderContext, IRankingHeaderContextContainer } from './interfaces';
export default class EngineRenderer extends AEventDispatcher {
    protected data: ADataProvider;
    static readonly EVENT_HIGHLIGHT_CHANGED: string;
    protected readonly options: Readonly<ILineUpOptions>;
    private readonly histCache;
    readonly node: HTMLElement;
    private readonly table;
    private readonly rankings;
    private readonly slopeGraphs;
    readonly ctx: IRankingHeaderContextContainer & IRenderContext & IEngineRankingContext;
    private readonly updateAbles;
    private zoomFactor;
    readonly idPrefix: string;
    private enabledHighlightListening;
    constructor(data: ADataProvider, parent: HTMLElement, options: Readonly<ILineUpOptions>);
    readonly style: GridStyleManager;
    zoomOut(): void;
    zoomIn(): void;
    private updateZoomFactor();
    pushUpdateAble(updateAble: (ctx: IRankingHeaderContext) => void): void;
    protected createEventList(): string[];
    setDataProvider(data: ADataProvider): void;
    private takeDownProvider();
    private initProvider(data);
    private updateSelection(dataIndices);
    private updateHist(ranking?, col?);
    private addRanking(ranking);
    private updateRotatedHeaderState();
    private removeRanking(ranking);
    update(rankings?: EngineRanking[]): void;
    private updateSlopeGraphs(rankings?);
    setHighlight(dataIndex: number, scrollIntoView: boolean): boolean;
    setHighlightToNearest(dataIndices: number[], scrollIntoView: boolean): boolean;
    getHighlight(): number;
    enableHighlightListening(enable: boolean): void;
    destroy(): void;
}
