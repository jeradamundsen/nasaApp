function GetPageRecursive(pageNumber) {
     var promise = $http.get('url', { page: pageNumber} ).then(function(r) {
        // add results to data here
        // also figure out if there's another page to get
        if(AnotherPage)
          GetPageRecursive(pageNumber ++)
        else
          deferred.resolve(data);
     })
     return promise;
   }

   return {
      GetData: function() {
        deferred = $q.defer();

        GetPageRecursive(1);

        return deferred.promise
      }

   }
