var relationsData = [ {
    type: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
}, {
    type: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
}, {
    type: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
} ];


Template.relationsList.helpers({
  relations: relationsData
});