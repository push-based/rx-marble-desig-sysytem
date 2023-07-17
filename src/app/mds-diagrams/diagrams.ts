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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/audit.png?raw=true',
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'auditTime',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/auditTime.png?raw=true'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/concat.png?raw=true'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concatAll',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/concatAll.png?raw=true'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concatMap',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/concatMap.png?raw=true'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concatMapTo',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/concatMapTo.png?raw=true'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/debounce.png?raw=true'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'debounceTime',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/debounceTime.png?raw=true'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/subjects/Subject.png?raw=true'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'distinct'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'distinctUntilChanged'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'distinctUntilKexChanged'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/endWith.png?raw=true'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'every'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'exhaust'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'exhaustMap'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'expand'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'Filter'
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
        desc: 'first'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/map.png?raw=true'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'mapTo',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/mapTo.png?raw=true'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'materialize',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/materialize.png?raw=true'
    },
    {
        hidden: false,
        class: 'scan',
        desc: 'max'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'merge'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeAll'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeMap'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'flatMap'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeMapTp'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'mergeScan'
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
        class: 'error-handling',
        desc: 'onErrorResumeNext'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/pluck.png?raw=true'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/sample.png?raw=true'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'sampleTime',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/sampleTime.png?raw=true'
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
        desc: 'skip'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skipLast'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skipUntil'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'skipWhile'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'startWith',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/startWith.png?raw=true'
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
        desc: 'switchAll'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'switchMap'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'switchMapTo'
    },
    {
        hidden: false,
        class: 'combine',
        desc: 'switchScan'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'take'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'takeLast'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'takeUntil'
    },
    {
        hidden: false,
        class: 'filter',
        desc: 'takeWhile'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/throttle.png?raw=true'
    },
    {
        hidden: false,
        class: 'rate-limit',
        desc: 'throttleTime',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/throttleTime.png?raw=true'
    },
    {
        hidden: false,
        class: 'error-handling',
        desc: 'throwIfEmpty'
    },
    {
        hidden: false,
        class: 'transform',
        desc: 'timeInInterval',
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/timeInterval.png?raw=true'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/timestamp.png?raw=true'
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
        class: 'combine',
        desc: 'combineLatest'
    },
    {
        hidden: false,
        class: 'merge',
        desc: 'concat'
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
        class: 'merge',
        desc: 'merge'
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
        image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/trasform/pairs.png?raw=true'
    },
    {
        hidden: false,
        class: 'condition',
        desc: 'race'
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
    {
        hidden: false,
        class: 'combine',
        desc: 'zip'
    },
];
