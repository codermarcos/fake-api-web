import { templeteApply } from '../../../common';

export const tab_link = (args) => {
  const templete_tab_link = require('./tab_link.html');
  return templeteApply(templete_tab_link, args);
};

export const tab_content = (args) => {
  const templete_tab_content = require('./tab_content.html');
  return templeteApply(templete_tab_content, args);
};