{\rtf1\ansi\ansicpg1251\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
{\info
{\author BulkaSeal}}\paperw11900\paperh16840\margl1701\margr850\margb1134\margt1134\vieww11840\viewh5720\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
const nav = document.querySelector('.nav');\
const menuButton = document.querySelector('.main-navigation__toggle');\
nav.classList.add('main-nav--closed');\
nav.classList.remove('main-nav--nojs');\
\
menuButton.addEventListener('click', () => \{\
    nav.classList.toggle('main-nav--closed');\
    nav.classList.toggle('main-nav--opened');\
\});\
\
}