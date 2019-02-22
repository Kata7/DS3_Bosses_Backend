
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Bosses').del()
    .then(function () {
      // Inserts seed entries
      return knex('Bosses').insert([
        {boss_name: 'Iudex Gundyr', location_id: '1'},
        {boss_name: 'Vordt of the Boreal Valley', location_id: '3'},
        {boss_name: 'Curse-Rotted Greatwood', location_id: '4'},
        {boss_name: 'Crystal Sage', location_id: '5'},
        {boss_name: 'Abyss Watchers', location_id: '7'},
        {boss_name: 'Deacons of the Deep', location_id: '6'},
        {boss_name: 'High Lord Wolnir', location_id: '8'},
        {boss_name: 'Old Demon King', location_id: '9'},
        {boss_name: 'Pontiff Sulyvahn', location_id: '10'},
        {boss_name: 'Yhorm the Giant', location_id: '12'},
        {boss_name: 'Aldrich, Devourer of Gods', location_id: '13'},
        {boss_name: 'Dancer of the Boreal Valley', location_id: '3'},
        {boss_name: 'Dragonslayer Armor', location_id: '14'},
        {boss_name: 'Oceiros, the Consumed King', location_id: '15'},
        {boss_name: 'Champion Gundyr', location_id: '17'},
        {boss_name: 'Lorian, Elder Prince', location_id: '16'},
        {boss_name: 'Lothric, Younger Prince', location_id: '16'},
        {boss_name: 'Ancient Wyvern', location_id: '18'},
        {boss_name: 'King of the Storm', location_id: '18'},
        {boss_name: 'Nameless King', location_id: '18'},
        {boss_name: 'Soul of Cinder', location_id: '19'},
        {boss_name: 'Champion\'s Gravetender', location_id: '20'},
        {boss_name: 'Sister Friede', location_id: '20'},
        {boss_name: 'Demon Prince', location_id: '21'},
        {boss_name: 'Halflight, Spear of the Church', location_id: '22'},
        {boss_name: 'Darkeater Midir', location_id: '22'},
        {boss_name: 'Slave Knight Gael', location_id: '22'}
      ]);
    });
};
