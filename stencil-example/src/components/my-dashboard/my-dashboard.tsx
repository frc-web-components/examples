import { FrcDashboard } from '@frc-web-components/dashboard';
import { Component, Prop, State, h, Host, Watch } from '@stencil/core';

@Component({
  tag: 'my-dashboard',
  styleUrl: 'my-dashboard.css',
  shadow: true,
})

export class TbaEventMatches {
  @State() element: HTMLElement;
  @State() groups: string[] = [];
  @State() selectedElement: string;
  @State() selectedGroup: string = 'My Elements';
  @Prop() dashboard: FrcDashboard;

  @Watch('selectedElement')
  updateElement() {
    this.element.appendChild(this.dashboard.getRootElement());
    this.dashboard.getRootElement().childNodes.forEach(node => node.remove());
    const element = document.createElement(this.selectedElement);
    this.dashboard.getRootElement().appendChild(element);
    this.dashboard.setSelectedElement(element);
  }

  @Watch('element')
  setSelectedElement() {
    setTimeout(() => {
      this.selectedElement = this.getElements()[0].selector;
    }, 500);
  }

  @Watch('dashboard')
  updateOnDashboardChange() {
    this.groups = this.getGroups();
  }

  @Watch('groups')
  updateOnGroupsChange() {
    if (!this.groups.includes(this.selectedGroup)) {
      this.selectedGroup = this.groups[0] ?? '';
    }
  }

  @Watch('selectedGroup')
  updateOnSelectedGroupChange() {
    const selectedElementGroup = this.getElementConfig().group;
    if (selectedElementGroup !== this.selectedGroup) {
      this.selectedElement = this.getElements()[0].selector;
    }
  }

  getGroups(): string[] {
    const selectors = this.dashboard.getConnector().getElementConfigSelectors();
    const groups: string[] = selectors
      .map(selector => {
        const config = this.dashboard.getConnector().getElementConfig(selector);
        return config.group;
      })
    return [...new Set(groups)].sort();
  }

  connectedCallback() {
    if (this.dashboard) {
      this.updateOnDashboardChange();
    }
  }

  getElementConfig() {
    return this.dashboard.getConnector().getMatchingElementConfig(this.element);
  }

  getElements() {
    const selectors = this.dashboard.getConnector().getElementConfigSelectors();
    return selectors
      .filter(selector => {
        const config = this.dashboard.getConnector().getElementConfig(selector);
        return config.group === this.selectedGroup && config.dashboard.topLevel;
      })
      .map(selector => ({
        selector,
        name: this.dashboard.getSelectorDisplayName(selector)
      }))
      .sort((el1, el2) => {
        return el1.name.localeCompare(el2.name);
      });
  }

  render() {
    return (
      <Host ref={(el) => this.element = el as HTMLElement}>
        <div class="dashboard">
          <div class="sidebar">
            <select class="group-selector" onChange={(ev: any) => {
              this.selectedGroup = ev.target.value;
            }}>
              {this.groups.map(group => (
                <option value={group} selected={group === this.selectedGroup}>{group}</option>
              ))}
            </select>
            <header>Elements</header>
            {this.getElements().map(({ selector, name }) => (
              <p
                class={this.selectedElement === selector ? 'selected' : ''}
                key={selector}
                onClick={() => this.selectedElement = selector}
              >
                {name}
              </p>
            ))}
          </div>
          <div class="editors">
            <div>
              <header>Properties</header>
              <dashboard-properties-editor dashboard={this.dashboard}></dashboard-properties-editor>
            </div>
            <div>
              <header>Sources</header>
              <dashboard-sources-editor dashboard={this.dashboard}></dashboard-sources-editor>
            </div>
          </div>
          <div class="displayed-element">
            <slot></slot>
          </div>
        </div>
      </Host>
    )
  }

}
