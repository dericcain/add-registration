# MobX

0. The MobX philosophy
    - Embrace mutable state
        - Non-normalized data
        - Recursive references
    - State changes are synchronous
    - Create observables and derive as much state as possible
    - How it works (React)
        - 1. Make something observable
        - 2. Add computed properties that are derived data from observables
        - 3. Change observable data
        - 4. Computed properties are re-computed (if needed)
        - 5. Notify Observers of the changes
        - 6. Re-render (if needed)
1. Decorators
    - `decorate(SomeModel, { propertyName: observable, someGetter: computed })` - Decorate API
2. Observables
    - `observable()` - Recursive observable (shorthand)
    - `observable.shallow()` - Shallow observable
    - `observable.object()` - Observable object
    - `observable.array()` - Observable array
    - `observable.map()` - Observable map
    - `observable.box()` - Observable primitive
    - `observable.ref()` - Observable reference notifies of reference changes
    - `observable.struct()` - Only notifies if an object structure has changed (could be a different reference with same value)
3. Computed Properties
4. Actions
    - Batched updates
    - Asynchronous code
5. Models
    - Classes (Smart)
    - Objects (Simple)
    - Maps (Array like)
6. Stores
    - Root Store Pattern
    - Multi-Store Pattern
7. React Components
    - Inject
    - Observe
