import React from 'react';
import { inject, observer } from 'mobx-react';

import { RootStore } from 'Stores';

type Store = {
  store: RootStore;
};

// This is a custom MobX function that injects and observes a component with type safety
// This is essentially the same as this:
//
// export default inject(mapStateToProps)(observer(SomeComponent));
// or with decorators
//
// @inject(mapStateToProps)
// @observer
// class SomeComponent extends Component {
export function connect<MappedProps>(mapStoreToProps: (store: Store) => MappedProps) {
  return function<WrappedProps>(
    WrappedComponent: React.ComponentClass<WrappedProps> | React.FC<WrappedProps>,
  ) {
    return (inject(mapStoreToProps)(observer(WrappedComponent)) as unknown) as React.ComponentClass<
      Partial<WrappedProps>
    >;
  };
}
