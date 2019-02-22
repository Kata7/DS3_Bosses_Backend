
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Resistances').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resistances').insert([
        // Iudex Gundyr
        {boss_id: 1, damage_id: 8},
        {boss_id: 1, damage_id: 9},

        // Vordt
        {boss_id: 2, damage_id: 3},
        {boss_id: 2, damage_id: 4},

        // Greatwood

        // Crystal Sage
        {boss_id: 4, damage_id: 5},

        // Abyss Watchers
        {boss_id: 5, damage_id: 8},
        {boss_id: 5, damage_id: 9},

        // Deacons
        {boss_id: 6, damage_id: 5},
        {boss_id: 6, damage_id: 8},
        {boss_id: 6, damage_id: 9},

        // Wolnir
        {boss_id: 7, damage_id: 8},

        // Demon King
        {boss_id: 8, damage_id: 6},

        // Pontiff
        {boss_id: 9, damage_id: 9},
        {boss_id: 9, damage_id: 10},
        {boss_id: 9, damage_id: 11},
        {boss_id: 9, damage_id: 12},

        // Yhorm
        {boss_id: 10, damage_id: 1},
        {boss_id: 10, damage_id: 2},
        {boss_id: 10, damage_id: 3},
        {boss_id: 10, damage_id: 4},
        {boss_id: 10, damage_id: 5},
        {boss_id: 10, damage_id: 8},

        // Aldrich
        {boss_id: 11, damage_id: 5},
        {boss_id: 11, damage_id: 8},

        // Dancer
        {boss_id: 12, damage_id: 9},

        // Dragonslayer Armor
        {boss_id: 13, damage_id: 7},
        {boss_id: 13, damage_id: 8},

        // Oceiros
        {boss_id: 14, damage_id: 5},
        {boss_id: 14, damage_id: 9},

        // Champion Gundyr
        {boss_id: 15, damage_id: 9},
        {boss_id: 15, damage_id: 10},
        {boss_id: 15, damage_id: 11},

        // Lorian
        {boss_id: 16, damage_id: 8},

        // Lothric
        {boss_id: 17, damage_id: 8},

        // Wyvern
        {boss_id: 18, damage_id: 9},
        {boss_id: 18, damage_id: 10},
        {boss_id: 18, damage_id: 11},

        // King of the Storm (dragon)
        {boss_id: 19, damage_id: 6},
        {boss_id: 19, damage_id: 9},
        {boss_id: 19, damage_id: 10},
        {boss_id: 19, damage_id: 11},

        // Nameless King
        {boss_id: 20, damage_id: 7},
        {boss_id: 20, damage_id: 9},
        {boss_id: 20, damage_id: 12},

        // Soul of Cinder
        {boss_id: 21, damage_id: 6},
        {boss_id: 21, damage_id: 9},

        // Champion's Gravetender
        {boss_id: 22, damage_id: 10},
        {boss_id: 22, damage_id: 11},
        {boss_id: 22, damage_id: 12},

        // Sister Friede
        {boss_id: 23, damage_id: 10},
        {boss_id: 23, damage_id: 11},

        // Demon Prince
        {boss_id: 24, damage_id: 1},
        {boss_id: 24, damage_id: 2},
        {boss_id: 24, damage_id: 4},
        {boss_id: 24, damage_id: 5},
        {boss_id: 24, damage_id: 6},
        {boss_id: 24, damage_id: 7},

        // Halflight
        {boss_id: 25, damage_id: 9},
        {boss_id: 25, damage_id: 10},
        {boss_id: 25, damage_id: 11},

        // Midir
        {boss_id: 26, damage_id: 5},
        {boss_id: 26, damage_id: 6},
        {boss_id: 26, damage_id: 8},

        // Gael
        {boss_id: 27, damage_id: 3},
        {boss_id: 27, damage_id: 8},
        {boss_id: 27, damage_id: 9}
      ]);
    });
};
