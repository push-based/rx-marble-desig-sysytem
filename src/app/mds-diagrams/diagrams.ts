export interface MdsDiagram {
    hidden?: boolean;
    class: string;
    desc: string;
    image?: string;
    text?: string;
}

export const mdsDiagrams: MdsDiagram[] = [
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'audit',
        image: '/assets/diagrams/audit.png'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'auditTime',
        image: '/assets/diagrams/auditTime.png'
    },
    {
        hidden: false,
        class: 'buffer',
        desc: 'buffer'
    },
    {
        hidden: false,
        class: 'buffer',
        desc: 'bufferCount',
    },
    {
        hidden: false,
        class: 'buffer',
        desc: 'bufferTime'
    },
    {
        hidden: false,
        class: 'buffer',
        desc: 'bufferToggle'
    },
    {
        hidden: false,
        class: 'buffer',
        desc: 'bufferWhen'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'catchError'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'combineAll'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'combineLatest'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concat',
        image: '/assets/diagrams/concat.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concatAll',
        image: '/assets/diagrams/concatAll.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concatMap',
        image: '/assets/diagrams/concatMap.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concatMapTo',
        image: '/assets/diagrams/concatMapTo.png'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'count'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'debounce',
        image: '/assets/diagrams/debounce.png'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'debounceTime',
        image: '/assets/diagrams/debounceTime.png'
    },
    {
        hidden: false,
        class: 'condition',
        desc: 'defaultEmpty'
    },
    {
        hidden: false,
        class: 'timing',
        desc: 'delay'
    },
    {
        hidden: false,
        class: 'timing',
        desc: 'delayWhen'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'dematerialize',
        image: '/assets/diagrams/dematerialize.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'distinct',
        image: '/assets/diagrams/distinct.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'distinctUntilChanged',
        image: '/assets/diagrams/distinctUntilChanged.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'distinctUntilKeyChanged',
        image: '/assets/diagrams/distinctUntilKeyChanged.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'elementAt'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'endWith',
        image: '/assets/diagrams/endWith.png'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'every'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'exhaust',
        image: '/assets/diagrams/exhaust.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'exhaustMap',
        image: '/assets/diagrams/exhaustMap.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'expand',
        image: '/assets/diagrams/expand.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'filter',
        image: '/assets/diagrams/filter.png'
    },
    {
        hidden: false,
        class: 'side-effect',
        desc: 'finalize'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'find'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'findIndex'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'first',
        image: '/assets/diagrams/first.png'
    },
    {
        hidden: false,
        class: 'slice',
        desc: 'groupBy'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'ignoreElements'
    },
    {
        hidden: false,
        class: 'condition',
        desc: 'isEmpty'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'last'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'map',
        image: '/assets/diagrams/map.png'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'mapTo',
        image: '/assets/diagrams/mapTo.png'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'materialize',
        image: '/assets/diagrams/materialize.png'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'max'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'merge',
        image: '/assets/diagrams/merge.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeAll',
        image: '/assets/diagrams/mergeAll.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeMap',
        image: '/assets/diagrams/mergeMap.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'flatMap',
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeMapTo',
        image: '/assets/diagrams/mergeMapTo.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeScan',
        image: '/assets/diagrams/mergeScan.png'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'min'
    },
    {
        hidden: false,
        class: 'scheduling',
        desc: 'observeOn',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/scheduling/observeOn.png?raw=true'
    },
    {
        hidden: false,
        class: 'buffer',
        desc: 'pairwise'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'partition'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'pluck',
        image: '/assets/diagrams/pluck.png'
    },
    {
        hidden: false,
        class: 'condition',
        desc: 'race'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'reduce'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'repeat'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'repeatWhen'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'retry'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'retryWhen'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'sample',
        image: '/assets/diagrams/sample.png'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'sampleTime',
        image: '/assets/diagrams/sampleTime.png'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'scan'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'sequenceEqual'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'single'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skip',
        image: '/assets/diagrams/skip.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skipLast',
        image: '/assets/diagrams/skipLast.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skipUntil',
        image: '/assets/diagrams/skipUntil.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skipWhile',
        image: '/assets/diagrams/skipWhile.png'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'startWith',
        image: '/assets/diagrams/startWith.png'
    },
    {
        hidden: false,
        class: 'scheduling',
        desc: 'subscribeOn',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/scheduling/subscribeOn.png?raw=true'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'switchAll',
        image: '/assets/diagrams/switchAll.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'switchMap',
        image: '/assets/diagrams/switchMap.png'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'switchMapTo',
        image: '/assets/diagrams/switchMapTo.png'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'switchScan',
        image: '/assets/diagrams/switchScan.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'take',
        image: '/assets/diagrams/take.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'takeLast',
        image: '/assets/diagrams/takeLast.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'takeUntil',
        image: '/assets/diagrams/takeUntil.png'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'takeWhile',
        image: '/assets/diagrams/takeWhile.png'
    },
    {
        hidden: false,
        class: 'side-effect',
        desc: 'tab'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'throttle',
        image: '/assets/diagrams/throttle.png'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'throttleTime',
        image: '/assets/diagrams/throttleTime.png'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'throwIfEmpty'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'timeInterval',
        image: '/assets/diagrams/timeInterval.png'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'timeout'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'timeoutWith'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'timestamp',
        image: '/assets/diagrams/timestamp.png'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'toArray'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'window'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'windowCount'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'windowTime'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'windowToggle'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'windowWhen'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'withLatestFrom'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'zip'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'zipAll'
    },
    {
        hidden: false,
        class: 'subject',
        desc: 'AsyncSubject',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/subjects/AsyncSubject.png?raw=true'
    },
    {
        hidden: false,
        class: 'subject',
        desc: 'BehaviorSubject',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/subjects/BehaviorSubject.png?raw=true'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'create'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'defer'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'EMPTY'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'forkJoin'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'from'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'fromEvent'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'fromEventPattern'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'generate'
    },
    {
        hidden: false,
        class: 'condition',
        desc: 'if'
    },
    {
        hidden: false,
        class: 'timing',
        desc: 'interval'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'NEVER'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'of'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'onErrorResumeNext'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'pairs',
        image: '/assets/diagrams/pairs.png'
    },
    {
        hidden: false,
        class: 'creation',
        desc: 'range'
    },
    {
        hidden: false,
        class: 'subject',
        desc: 'ReplaySubject',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/subjects/ReplaySubject.png?raw=true'
    },
    {
        hidden: false,
        class: 'subject',
        desc: 'Subject',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/subjects/Subject.png?raw=true'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'throwError'
    },
    {
        hidden: false,
        class: 'timing',
        desc: 'timer'
    },
];
