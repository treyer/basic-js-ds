const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
module.exports = class BinarySearchTree {

  constructor(){
    this.rootEl = null;
  }

  root = () => {
    return this.rootEl;
  }

  add = (data) => {
    this.rootEl = addWithin(this.rootEl, data);

    function addWithin(node, data) {
      if (!node) return new Node(data);
      
      if (node.data === data) return node;
      
      if (data < node.data){
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has = (data) => {
    return searchWithin (this.rootEl, data);

    function searchWithin(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if ( data < node.data){
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find = (data) => {
    function search(node, data) {
      if(node === null) return null;

      if (data === node.data) return node;

      if(data < node.data){
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
    return search(this.rootEl, data)
  }

  remove = (data) => {
    this.rootEl = removeNode(this.rootEl, data);

    function removeNode(node, value) {
      if (!node) return null;
        
      if (value < node.data){
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value){
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if ( ! node.left && ! node.right)  return null;

        if ( ! node.left){
          node = node.left;
          return node;
        }

        if ( ! node.right){
          node = node.right;
          return node;
        }

        let minRight = node.right;
        while (minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node
      }
    }
  }

  min = () => {
    if ( ! this.rootEl) return;

    let node = this.rootEl;
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max = () => {
    if ( ! this.rootEl) return null;
      
    let node = this.rootEl;
    while (node.right){
      node = node.right;
    }

    return node.data;
  }

}