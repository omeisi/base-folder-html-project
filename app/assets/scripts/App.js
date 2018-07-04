import	$ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Slider from './modules/Slider';
import Modal from './modules/Modal';




new RevealOnScroll($('.feture-item'),'85%');
new RevealOnScroll($('.service'), '60%');
var stickyHeader = new StickyHeader();
var slider = new Slider();
var modal = new Modal();
