import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { BugModuleViewProps } from './BugModule.types';

const NativeView: React.ComponentType<BugModuleViewProps> =
  requireNativeViewManager('BugModule');

export default function BugModuleView(props: BugModuleViewProps) {
  return <NativeView {...props} />;
}
