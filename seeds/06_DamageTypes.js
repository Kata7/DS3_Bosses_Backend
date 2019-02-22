
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DamageTypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('DamageTypes').insert([
        {damage_name: 'normal'},
        {damage_name: 'strike'},
        {damage_name: 'slash'},
        {damage_name: 'thrust'},
        {damage_name: 'magic'},
        {damage_name: 'fire'},
        {damage_name: 'lightning'},
        {damage_name: 'dark'},
        {damage_name: 'bleed'},
        {damage_name: 'poison'},
        {damage_name: 'toxic'},
        {damage_name: 'frost'},
        {damage_name: 'parry'},
        {damage_name: 'backstab'},
        {damage_name: 'special weapon'},
        {damage_name: 'weak point'}
      ]);
    });
};
