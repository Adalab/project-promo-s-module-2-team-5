'use strict';

console.log('>> Ready :)');

const designLeyend = document.querySelector('.js-design');
const arrowDesign = document.querySelector('.js-design-arrow');
const fillLeyend = document.querySelector('.js-fill');
const arrowFill = document.querySelector('.js-fill-arrow');
const shareLeyend = document.querySelector('.js-share');
const arrowShare = document.querySelector('.js-share-arrow');
const designContent = document.querySelector('.js-form1');
const fillContent = document.querySelector('.js-form2');
const shareContent = document.querySelector('.js-form3');
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputMail = document.querySelector('.js-input-mail');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewMail = document.querySelector('.js-preview-mail');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-Github');

const data = {
  pallete: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

//evento
