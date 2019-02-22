
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Resistances').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resistances').insert([
        // Iudex Gundyr
        {id: 1, colName: 8},
        {id: 1, colName: 9},

        // Vordt
        {id: 2, colName: 3},
        {id: 2, colName: 4},

        // Greatwood

        // Crystal Sage
        {id: 4, colName: 5},

        // Abyss Watchers
        {id: 5, colName: 8},
        {id: 5, colName: 9},

        // Deacons
        {id: 6, colName: 5},
        {id: 6, colName: 8},
        {id: 6, colName: 9},

        // Wolnir
        {id: 7, colName: 8},

        // Demon King
        {id: 8, colName: 6},

        // Pontiff
        {id: 9, colName: 9},
        {id: 9, colName: 10},
        {id: 9, colName: 11},
        {id: 9, colName: 12},

        // Yhorm
        {id: 10, colName: 1},
        {id: 10, colName: 2},
        {id: 10, colName: 3},
        {id: 10, colName: 4},
        {id: 10, colName: 5},
        {id: 10, colName: 8},

        // Aldrich
        {id: 11, colName: 5},
        {id: 11, colName: 8},

        // Dancer
        {id: 12, colName: 9},

        // Dragonslayer Armor
        {id: 13, colName: 7},
        {id: 13, colName: 8},

        // Oceiros
        {id: 14, colName: 5},
        {id: 14, colName: 9},

        // Champion Gundyr
        {id: 15, colName: 9},
        {id: 15, colName: 10},
        {id: 15, colName: 11},

        // Lorian
        {id: 16, colName: 8},

        // Lothric
        {id: 17, colName: 8},

        // Wyvern
        {id: 18, colName: 9},
        {id: 18, colName: 10},
        {id: 18, colName: 11},

        // King of the Storm (dragon)
        {id: 19, colName: 6},
        {id: 19, colName: 9},
        {id: 19, colName: 10},
        {id: 19, colName: 11},

        // Nameless King
        {id: 20, colName: 7},
        {id: 20, colName: 9},
        {id: 20, colName: 12},

        // Soul of Cinder
        {id: 21, colName: 6},
        {id: 21, colName: 9},

        // Champion's Gravetender
        {id: 22, colName: 10},
        {id: 22, colName: 11},
        {id: 22, colName: 12},

        // Sister Friede
        {id: 23, colName: 10},
        {id: 23, colName: 11},

        // Demon Prince
        {id: 24, colName: 1},
        {id: 24, colName: 2},
        {id: 24, colName: 4},
        {id: 24, colName: 5},
        {id: 24, colName: 6},
        {id: 24, colName: 7},

        // Halflight
        {id: 25, colName: 9},
        {id: 25, colName: 10},
        {id: 25, colName: 11},

        // Midir
        {id: 26, colName: 5},
        {id: 26, colName: 6},
        {id: 26, colName: 8},

        // Gael
        {id: 27, colName: 3},
        {id: 27, colName: 8},
        {id: 27, colName: 9},
      ]);
    });
};
