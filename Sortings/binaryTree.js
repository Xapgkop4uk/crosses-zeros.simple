exports.bTreeSort = function (arr){
  bTreeNode = function(val, left, right){
    this.val =  val;
    this.left = left;
    this.right = right;
  }

  var mainNode = new bTreeNode(arr[0],null,null);
  for (var i = 1; i < arr.length; i++){
    addNode(mainNode, new bTreeNode(arr[i],null,null));
  }

  var i = 0;
  getTree(mainNode);

  function addNode(main, arm){
    if(arm.val >= main.val){
      if(main.right == null){
        main.right = arm;
      }
      else{
        addNode(main.right, arm);
      }
    }
    else{
      if(main.left == null){
        main.left = arm;
      }
      else{
        addNode(main.left, arm);
      }
    }
  }

  function getTree(mainNode){
    if(mainNode.left != null){
      getTree(mainNode.left, arr);
    }

    arr[i++] = mainNode.val;

    if(mainNode.right != null){
      getTree(mainNode.right, arr);
    }
  }
}
