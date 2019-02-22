
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Weaknesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('Weaknesses').insert([
        // Iudex Gundyr
        {boss_id: 1, damage_id: 6},
        {boss_id: 1, damage_id: 12},
        {boss_id: 1, damage_id: 13},

        // Vordt
        {boss_id: 2, damage_id: 6},
        {boss_id: 2, damage_id: 8},

        // Greatwood
        {boss_id: 3, damage_id: 3},
        {boss_id: 3, damage_id: 4},
        {boss_id: 3, damage_id: 6},
        {boss_id: 3, damage_id: 16},

        // Crystal Sage
        {boss_id: 4, damage_id: 2},
        {boss_id: 4, damage_id: 3},
        {boss_id: 4, damage_id: 4},
        {boss_id: 4, damage_id: 7},
        {boss_id: 4, damage_id: 10},
        {boss_id: 4, damage_id: 11},

        // Abyss Watchers
        {boss_id: 5, damage_id: 7},
        {boss_id: 5, damage_id: 13},
        {boss_id: 5, damage_id: 14},

        // Deacons
        {boss_id: 6, damage_id: 2},
        {boss_id: 6, damage_id: 3},
        {boss_id: 6, damage_id: 4},
        {boss_id: 6, damage_id: 13},
        {boss_id: 6, damage_id: 14},
        {boss_id: 6, damage_id: 15},

        // Wolnir
        {boss_id: 7, damage_id: 15},
        {boss_id: 7, damage_id: 16},

        // Demon King
        {boss_id: 8, damage_id: 8},
        {boss_id: 8, damage_id: 15},

        // Pontiff
        {boss_id: 9, damage_id: 4},
        {boss_id: 9, damage_id: 13},

        // Yhorm
        {boss_id: 10, damage_id: 7},
        {boss_id: 10, damage_id: 15},

        // Aldrich
        {boss_id: 11, damage_id: 6},
        {boss_id: 11, damage_id: 7},
        {boss_id: 11, damage_id: 15},

        // Dancer
        {boss_id: 12, damage_id: 2},
        {boss_id: 12, damage_id: 7},
        {boss_id: 12, damage_id: 8},
        
        // Dragonslayer Armor
        {boss_id: 13, damage_id: 12},
        {boss_id: 13, damage_id: 15},

        // Oceiros
        {boss_id: 14, damage_id: 7},

        // Champion Gundyr
        {boss_id: 15, damage_id: 7},
        {boss_id: 15, damage_id: 13},

        // Lorian
        {boss_id: 16, damage_id: 7},
        {boss_id: 16, damage_id: 12},

        // Lothric
        {boss_id: 17, damage_id: 2},
        {boss_id: 17, damage_id: 3},
        {boss_id: 17, damage_id: 4},

        // Wyvern
        {boss_id: 18, damage_id: 7},
        {boss_id: 18, damage_id: 12},

        // King of Storms (dragon)
        {boss_id: 19, damage_id: 7},
        {boss_id: 19, damage_id: 12},

        // Nameless King
        {boss_id: 20, damage_id: 6},

        // Soul of Cinder
        {boss_id: 21, damage_id: 7},
        {boss_id: 21, damage_id: 8},

        // Champion's Gravetender
        {boss_id: 22, damage_id: 6},
        {boss_id: 22, damage_id: 7},
        {boss_id: 22, damage_id: 9},
        {boss_id: 22, damage_id: 13},
        {boss_id: 22, damage_id: 14},

        // Sister Friede
        {boss_id: 23, damage_id: 7},
        {boss_id: 23, damage_id: 8},
        {boss_id: 23, damage_id: 9},
        {boss_id: 23, damage_id: 13},
        {boss_id: 23, damage_id: 14},
        {boss_id: 23, damage_id: 15},

        // Demon Prince
        {boss_id: 24, damage_id: 8},
        {boss_id: 24, damage_id: 9},
        {boss_id: 24, damage_id: 15},

        //Halflight
        {boss_id: 25, damage_id: 7},
        {boss_id: 19, damage_id: 12},
        {boss_id: 25, damage_id: 13},
        {boss_id: 25, damage_id: 14},

        // Midir
        {boss_id: 26, damage_id: 4},
        {boss_id: 26, damage_id: 7},
        {boss_id: 26, damage_id: 15},

        // Gael
        {boss_id: 27, damage_id: 2},
        {boss_id: 27, damage_id: 10},
        {boss_id: 27, damage_id: 11},
        {boss_id: 27, damage_id: 12},
        {boss_id: 27, damage_id: 15}
      ]);
    });
};
