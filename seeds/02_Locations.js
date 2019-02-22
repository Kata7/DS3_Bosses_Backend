
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('Locations').insert([
        {location_name: 'Cemetary of Ash'},
        {location_name: 'Firelink Shrine'},
        {location_name: 'High Wall of Lothric'},
        {location_name: 'Undead Settlement'},
        {location_name: 'Road of Sacrifices'},
        {location_name: 'Cathedral of the Deep'},
        {location_name: 'Farron Keep'},
        {location_name: 'Catacombs of Carthus'},
        {location_name: 'Smouldering Lake'},
        {location_name: 'Irithyll of the Boreal Valley'},
        {location_name: 'Irithyll Dungeon'},
        {location_name: 'Profaned Capital'},
        {location_name: 'Anor Londo'},
        {location_name: 'Lothric Castle'},
        {location_name: 'Consumed King\'s Garden'},
        {location_name: 'Grand Archives'},
        {location_name: 'Untended Graves'},
        {location_name: 'Archdragon Peak'},
        {location_name: 'Kiln of the First Flame'},
        {location_name: 'Painted World of Ariandel'},
        {location_name: 'The Dreg Heap'},
        {location_name: 'The Ringed City'}
      ]);
    });
};
