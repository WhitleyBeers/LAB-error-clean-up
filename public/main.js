import '../styles/main.scss';
import { htmlStructure, header } from '../components/htmlRendering';
import { startSortingBtn } from '../components/buttons';
import events from '../utils/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
