import styled from "styled-components";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 26px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid #ccc;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  z-index: 999999;
  background-color: white;

  /* box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3); */

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 12px;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";
