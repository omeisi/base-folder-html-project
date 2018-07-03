import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import	$ from 'jquery';

new RevealOnScroll($('.feture-item'),'85%');
new RevealOnScroll($('.service'), '60%');
var stickyHeader = new StickyHeader();