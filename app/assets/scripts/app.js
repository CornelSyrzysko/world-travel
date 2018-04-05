import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader form './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();
