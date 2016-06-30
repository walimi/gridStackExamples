        $(function() {
          var options = {};
          $('.grid-stack').gridstack(options);

          new function() {
            this.serialized_data = [
        		{ x: 0, y: 0, width: 2, height: 2}, 
        		{ x: 3, y: 1, width: 1, height: 2},
        		{ x: 4, y: 1, width: 1, height: 1}, 
        		{ x: 2, y: 3, width: 3, height: 1}, 
        		{ x: 1, y: 4, width: 1, height: 1}, 
        		{ x: 1, y: 3, width: 1, height: 1}, 
        		{ x: 2, y: 4, width: 1, height: 1}, 
        		{ x: 2, y: 5, width: 1, height: 1}];

            this.grid = $('.grid-stack').data('gridstack');

            this.load_grid = function() {
              this.grid.removeAll();
              var items = GridStackUI.Utils.sort(this.serialized_data);
              _.each(items, function(node) {
                this.grid.addWidget($('<div><div class="grid-stack-item-content" /></div>'),
                  node.x, node.y, node.width, node.height);
              }, this);
            }.bind(this);

            this.save_grid = function() {
              this.serialized_data = _.map($('.grid-stack > .grid-stack-item:visible'), function(el) {
                el = $(el);
                var node = el.data('_gridstack_node');
                return {
                  x: node.x,
                  y: node.y,
                  width: node.width,
                  height: node.height
                };
              }, this);
              $('#saved-data').val(JSON.stringify(this.serialized_data, null, '    '));
            }.bind(this);

            this.clear_grid = function() {
              this.grid.removeAll();
            }.bind(this);

            $('#save-grid').click(this.save_grid);
            $('#load-grid').click(this.load_grid);
            $('#clear-grid').click(this.clear_grid);

            this.load_grid();
          };
        });
