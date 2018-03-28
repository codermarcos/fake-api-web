import '../assets/scss/icons/style.scss';
import '../assets/scss/index.scss';
import './route.scss';
import * as templete_tab from './partial/tab';
import { qs, qsa } from '../common';

window.changeMenu = (e) => {
  e.stopPropagation();
  const sidebar = qs('.sidebar');
  sidebar.classList.toggle('close');
}

function deactiveAll(tabs_link, tabs_content) {
  tabs_link.forEach(element => element.classList.remove('active'));
  tabs_content.forEach(element => element.classList.remove('active'));
}

function activeThis(name) {
  const active = qsa(`[name="${name}"]`);
  
  active.forEach(
    element => element.classList.add('active')
  );
}

function removeThis(name) {
  const active = qsa(`[name="${name}"]`);
  
  active.forEach(
    element => element.remove()
  );
}

window.changeTab = (e) => {
  const tabs_link = qsa('.tab');
  const tabs_content = qsa('.tab__content');
  deactiveAll(tabs_link, tabs_content);

  const name = e.target.parentElement.getAttribute('name');

  activeThis(name);
}

window.removeTab = (e) => {
  const tab = e.target.parentElement;
  
  if (tab.classList.contains('active')) {
    removeThis(tab.getAttribute('name'));

    const tabs_link = qsa('.tab');
    const active = tabs_link.item(tabs_link.length-1).getAttribute('name');

    activeThis(active);
  } else {
    removeThis(tab.getAttribute('name'));
  }
}

window.addTab = (e) => {  
  const tabs_link = qsa('.tab');
  const tabs_content = qsa('.tab__content');
  deactiveAll(tabs_link, tabs_content);

  const name = `new-tab-${tabs_link.length}`;
  const tab_link_Nodes = templete_tab.tab_link({ name });
  const tab_content_Nodes = templete_tab.tab_content({ name });

  tab_link_Nodes.forEach(
    element => e.target.parentElement.insertBefore(element, e.target)
  );

  tab_content_Nodes.forEach(
    element => e.target.parentElement.insertBefore(element, e.target.nextElementSibling)
  );

  activeThis(name);
}

qs('#add-button').click();