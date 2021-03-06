/**
 * The Giant Swarm API v4
 * This is the documentation for the Giant Swarm API starting at version `v4`.  For an introduction to Giant Swarm, refer to the [documentation site](https://docs.giantswarm.io/).  The Giant Swarm API attempts to behave in a __restful__ way. As a developer, you acess recources using the `GET` method and, for example, delete them using the same path and the `DELETE` method.  Accessing resources via GET usually returns all information available about a resource, while collections, like for example the list of all clusters you have access to, only contain a selected few attributes of each member item.  Some requests, like for example the request to create a new cluster, don't return the resource itself. Instead, the response delivers a standard message body, showing a `code` and a `message` part. The `message` contains information for you or a client's end user. The `code` attribute contains some string (example: `RESOURCE_CREATED`) that is supposed to give you details on the state of the operation, in addition to standard HTTP status codes. This message format is also used in the case of errors. We provide a [list of all response codes](https://github.com/giantswarm/api-spec/blob/master/details/RESPONSE_CODES.md) outside this documentation.  Feedback on the API as well as this documentation is welcome via `support@giantswarm.io` or on IRC channel [#giantswarm](irc://irc.freenode.org:6667/#giantswarm) on freenode.  ## Source  The source of this documentation is available on [GitHub](https://github.com/giantswarm/api-spec). 
 *
 * OpenAPI spec version: 4.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V4NodeDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V4NodeDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.GiantSwarmV4) {
      root.GiantSwarmV4 = {};
    }
    root.GiantSwarmV4.V4AddClusterRequest = factory(root.GiantSwarmV4.ApiClient, root.GiantSwarmV4.V4NodeDefinition);
  }
}(this, function(ApiClient, V4NodeDefinition) {
  'use strict';




  /**
   * The V4AddClusterRequest model module.
   * @module model/V4AddClusterRequest
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>V4AddClusterRequest</code>.
   * Request model for creating a new cluster
   * @alias module:model/V4AddClusterRequest
   * @class
   * @param owner {String} Name of the organization owning the cluster
   */
  var exports = function(owner) {
    var _this = this;

    _this['owner'] = owner;




  };

  /**
   * Constructs a <code>V4AddClusterRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V4AddClusterRequest} obj Optional instance to populate.
   * @return {module:model/V4AddClusterRequest} The populated <code>V4AddClusterRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('release_version')) {
        obj['release_version'] = ApiClient.convertToType(data['release_version'], 'String');
      }
      if (data.hasOwnProperty('kubernetes_version')) {
        obj['kubernetes_version'] = ApiClient.convertToType(data['kubernetes_version'], 'String');
      }
      if (data.hasOwnProperty('workers')) {
        obj['workers'] = ApiClient.convertToType(data['workers'], [V4NodeDefinition]);
      }
    }
    return obj;
  }

  /**
   * Name of the organization owning the cluster
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * Cluster name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The [release](https://docs.giantswarm.io/api/#tag/releases) version to use in the new cluster 
   * @member {String} release_version
   */
  exports.prototype['release_version'] = undefined;
  /**
   * Kubernetes version number (deprecated). Doesn't have any effect. This attribute is going to be removed in future API versions. 
   * @member {String} kubernetes_version
   */
  exports.prototype['kubernetes_version'] = undefined;
  /**
   * @member {Array.<module:model/V4NodeDefinition>} workers
   */
  exports.prototype['workers'] = undefined;



  return exports;
}));


