'use strict';
const sbml2tableText = require('./sbml2table.xsl');
const sbml2mathText = require('./sbml2math.xsl');
const sbml2elementText = require('./sbml2element.xsl');
const sbml2hetaText = require('./sbml2heta.xsl');
const sbml2antimonyText = require('./sbml2antimony.xsl');

const sbml3tableText = require('./sbml3table.xsl');
const sbml3mathText = require('./sbml3math.xsl');

module.exports = function(parser){
  let sbml2table = parser.parseFromString(sbml2tableText, 'application/xml');
  let sbml2math = parser.parseFromString(sbml2mathText, 'application/xml');
  let sbml2element = parser.parseFromString(sbml2elementText, 'application/xml');
  let sbml2heta = parser.parseFromString(sbml2hetaText, 'application/xml');
  let sbml2antimony = parser.parseFromString(sbml2antimonyText, 'application/xml');

  let sbml3table = parser.parseFromString(sbml3tableText, 'application/xml');
  let sbml3math = parser.parseFromString(sbml3mathText, 'application/xml');

  return [
    {
      format: 'SBML',
      level: '2',
      name: 'sbml2table',
      xslt: sbml2table,
      parameters: ['useNames', 'correctMathml', 'equationsOff'],
      parameterNotes: {
        useNames: 'Use "names" attribute instead of "id" attribute. Turn on the option for models with very long or uninformative ids',
        correctMathml: 'Make some correction for MathML generated by SimBiology. Some of SimBiology models generate wrong MathML. Try this option if something looks wrong in equations.',
        equationsOff: 'Use this option if you are not interested in math. It reduces time of transformation.'
      }
    },
    {
      format: 'SBML',
      level: '2',
      name: 'sbml2heta',
      xslt: sbml2heta,
      parameters: ['fullForm'],
      parameterNotes: {
        fullForm: 'Display aux property, i.e. unused properties from SBML.'
      }
    },
    {
      format: 'SBML',
      level: '2',
      name: 'sbml2antimony',
      xslt: sbml2antimony,
      parameters: [],
      parameterNotes: {}
    },
    {
      format: 'SBML',
      level: '2',
      name: 'sbml2math',
      xslt: sbml2math,
      parameters: ['useNames', 'correctMathml', 'equationsOff'],
      parameterNotes: {
        useNames: 'Use "names" attribute instead of "id" attribute. Turn on the option for models with very long or uninformative ids',
        correctMathml: 'Make some correction for MathML generated by SimBiology. Some of SimBiology models generate wrong MathML. Try this option if something looks wrong in equations.',
        equationsOff: 'Use this option if you are not interested in math. It reduces time of transformation.'
      }
    },
    {
      format: 'SBML',
      level: '2',
      name: 'sbml2element',
      xslt: sbml2element,
      parameters: ['useNames', 'correctMathml', 'equationsOff', 'elementId'],
      parameterNotes: {
        useNames: 'Use "names" attribute instead of "id" attribute. Turn on the option for models with very long or uninformative ids',
        correctMathml: 'Make some correction for MathML generated by SimBiology. Some of SimBiology models generate wrong MathML. Try this option if something looks wrong in equations.',
        equationsOff: 'Use this option if you are not interested in math. It reduces time of transformation.'
      }
    },
    {
      format: 'SBML',
      level: '3',
      name: 'sbml3table',
      xslt: sbml3table,
      parameters: ['useNames', 'correctMathml', 'equationsOff'],
      parameterNotes: {
        useNames: 'Use "names" attribute instead of "id" attribute. Turn on the option for models with very long or uninformative ids',
        correctMathml: 'Make some correction for MathML generated by SimBiology. Some of SimBiology models generate wrong MathML. Try this option if something looks wrong in equations.',
        equationsOff: 'Use this option if you are not interested in math. It reduces time of transformation.'
      }
    },
    {
      format: 'SBML',
      level: '3',
      name: 'sbml3heta',
      xslt: sbml2heta,
      parameters: ['fullForm'],
      parameterNotes: {
        fullForm: 'Display aux property, i.e. unused properties from SBML.'
      }
    },
    {
      format: 'SBML',
      level: '3',
      name: 'sbml3antimony',
      xslt: sbml2antimony,
      parameters: [],
      parameterNotes: {}
    },
    {
      format: 'SBML',
      level: '3',
      name: 'sbml3math',
      xslt: sbml3math,
      parameters: ['useNames', 'correctMathml', 'equationsOff'],
      parameterNotes: {
        useNames: 'Use "names" attribute instead of "id" attribute. Turn on the option for models with very long or uninformative ids',
        correctMathml: 'Make some correction for MathML generated by SimBiology. Some of SimBiology models generate wrong MathML. Try this option if something looks wrong in equations.',
        equationsOff: 'Use this option if you are not interested in math. It reduces time of transformation.'
      }
    },
    {
      format: 'SBML',
      level: '3',
      name: 'sbml2element',
      xslt: sbml2element,
      parameters: ['useNames', 'correctMathml', 'equationsOff', 'elementId'],
      parameterNotes: {
        useNames: 'Use "names" attribute instead of "id" attribute. Turn on the option for models with very long or uninformative ids',
        correctMathml: 'Make some correction for MathML generated by SimBiology. Some of SimBiology models generate wrong MathML. Try this option if something looks wrong in equations.',
        equationsOff: 'Use this option if you are not interested in math. It reduces time of transformation.'
      }
    }
  ];
};
