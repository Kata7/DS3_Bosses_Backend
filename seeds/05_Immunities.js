
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Immunities').del()
    .then(function () {
      // Inserts seed entries
      return knex('Immunities').insert([
        // Iudex Gundyr
        {boss_id: 1, damage_id: 10},
        {boss_id: 1, damage_id: 11},

        // Vordt
        {boss_id: 2, damage_id: 9},
        {boss_id: 2, damage_id: 10},
        {boss_id: 2, damage_id: 11},
        {boss_id: 2, damage_id: 12},

        // Greatwood
        {boss_id: 3, damage_id: 9},
        {boss_id: 3, damage_id: 10},
        {boss_id: 3, damage_id: 11},
        {boss_id: 3, damage_id: 12},

        // Crystal Sage

        // Abyss Watchers
        {boss_id: 5, damage_id: 10},
        {boss_id: 5, damage_id: 11},

        // Deacons

        // Wolnir
        {boss_id: 7, damage_id: 9},
        {boss_id: 7, damage_id: 10},
        {boss_id: 7, damage_id: 11},
        {boss_id: 7, damage_id: 12},

        // Demon King
        {boss_id: 8, damage_id: 9},
        {boss_id: 8, damage_id: 12},

        // Pontiff

        // Yhorm
        {boss_id: 10, damage_id: 6},
        {boss_id: 10, damage_id: 9},
        {boss_id: 10, damage_id: 10},
        {boss_id: 10, damage_id: 11},
        {boss_id: 10, damage_id: 12},

        // Aldrich
        {boss_id: 11, damage_id: 10},
        {boss_id: 11, damage_id: 11},

        // Dancer
        {boss_id: 12, damage_id: 10},
        {boss_id: 12, damage_id: 11},
        {boss_id: 12, damage_id: 12},

        // Dragonslayer Armor
        {boss_id: 13, damage_id: 9},
        {boss_id: 13, damage_id: 10},
        {boss_id: 13, damage_id: 11},

        // Oceiros
        {boss_id: 14, damage_id: 10},
        {boss_id: 14, damage_id: 11},

        // Champion Gundyr

        // Lorian
        {boss_id: 16, damage_id: 10},
        {boss_id: 16, damage_id: 11},

        // Lothric
        {boss_id: 17, damage_id: 10},
        {boss_id: 17, damage_id: 11},

        // Wyvern

        // King of the Storm (dragon)

        // Nameless King
        {boss_id: 20, damage_id: 10},
        {boss_id: 20, damage_id: 11},

        // Soul of Cinder

        // Gravetender

        // Sister Friede
        {boss_id: 23, damage_id: 12},

        // Demon Prince
        {boss_id: 24, damage_id: 10},
        {boss_id: 24, damage_id: 11},
        {boss_id: 24, damage_id: 12},

        // Halflight

        // Midir
        {boss_id: 25, damage_id: 9},
        {boss_id: 25, damage_id: 10},
        {boss_id: 25, damage_id: 11},
        {boss_id: 25, damage_id: 12},

        // Gael
      ]);
    });
};
