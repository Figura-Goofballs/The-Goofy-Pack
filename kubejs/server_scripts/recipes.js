ServerEvents.recipes(event => {
   function computerUpgrade(item, pattern, keys) {
      let newKeys = {}

      for (const [key, value] of Object.entries(keys)) {
         let newValue = {item: value}
         
         if (value.startsWith("#")) {
            newValue = {tag: value.substring(1)}
         }

         newKeys[key] = newValue
      }

      event.custom({
         type: "computercraft:computer_upgrade",
         category: "redstone",
         key: newKeys,
         pattern: pattern,
         result: {item: item},
         show_notification: true
      })
   }


   event.remove({output: "computercraft:computer_normal"})
   event.remove({output: "computercraft:computer_advanced"})

   event.remove({output: "computercraft:monitor_normal"})
   event.remove({output: "computercraft:monitor_advanced"})

   event.remove({output: "computercraft:turtle_normal"})
   event.remove({output: "computercraft:turtle_advanced"})
   
   event.remove({output: "computercraft:pocket_computer_normal"})
   event.remove({output: "computercraft:pocket_computer_advanced"})


   event.custom({
      type: "create:mechanical_crafting",
      key: {
         I: {tag: "forge:plates/iron"},
         C: {item: "integrateddynamics:cable"},
         D: {item: "computercraft:disk"},
         S: {item: "computercraft:monitor_normal"},
         L: {item: "create:linked_controller"},
      },
      pattern: [
         " III ",
         "ICDCI",
         "ICSCI",
         "ICLCI",
         " III "
      ],
      result: {item: "computercraft:computer_normal", count: 1}
   })

   computerUpgrade(
      "computercraft:computer_advanced",
      [
         "GGG",
         "ECE",
         "GGG"
      ],
      {
         G: "#forge:plates/gold",
         C: "computercraft:computer_normal",
         E: "create:electron_tube"
      }
   )

   computerUpgrade(
      "computercraft:monitor_normal",
      [
         "III",
         "ISI",
         "III"
      ],
      {
         I: "#forge:plates/iron",
         S: "integrateddynamics:part_display_panel"
      }
   )
   computerUpgrade(
      "computercraft:monitor_advanced",
      [
         "GGG",
         "GMG",
         "GGG"
      ],
      {
         G: "#forge:plates/gold",
         M: "computercraft:monitor_normal"
      }
   )

   computerUpgrade(
      "computercraft:turtle_normal",
      [
         "III",
         "PCP",
         "IVI"
      ],
      {
         I: "#forge:plates/iron",
         C: "computercraft:computer_normal",
         V: "create:item_vault",
         P: "create:precision_mechanism"
      }
   )
   computerUpgrade(
      "computercraft:turtle_advanced",
      [
         "GPG",
         "PCP",
         "GGG"
      ],
      {
         G: "#forge:plates/gold",
         C: "computercraft:computer_advanced",
         V: "create:item_vault",
         P: "create:precision_mechanism"
      }
   )
   computerUpgrade(
      "computercraft:turtle_advanced",
      [
         "GPG",
         "ETE",
         "GGG"
      ],
      {
         G: "#forge:plates/gold",
         T: "computercraft:turtle_normal",
         P: "create:precision_mechanism",
         E: "create:electron_tube"
      }
   )

   computerUpgrade(
      "computercraft:pocket_computer_normal",
      [
         "   ",
         " C ",
         "   "
      ],
      {
         C: "computercraft:computer_normal",
      }
   )
   computerUpgrade(
      "computercraft:pocket_computer_advanced",
      [
         "   ",
         " C ",
         "   "
      ],
      {
         C: "computercraft:computer_advanced",
      }
   )
   computerUpgrade(
      "computercraft:computer_normal",
      [
         "   ",
         " C ",
         "   "
      ],
      {
         C: "computercraft:pocket_computer_normal",
      }
   )
   computerUpgrade(
      "computercraft:computer_advanced",
      [
         "   ",
         " C ",
         "   "
      ],
      {
         C: "computercraft:pocket_computer_advanced",
      }
   )
})

