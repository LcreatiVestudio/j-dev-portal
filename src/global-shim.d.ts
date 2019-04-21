import Vue, { VNode, FunctionalComponentOptions, Component } from 'vue'
import { PropsDefinition } from 'vue/types/options';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}