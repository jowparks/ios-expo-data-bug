import * as React from 'react';

import { BugModuleViewProps } from './BugModule.types';

export default function BugModuleView(props: BugModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
