var maxArea = function(height) {
    var results = 0
    for(var i = 0;i < height.length;i++){
        for(var x = 1 + i;x < height.length;x++){
            var small = 0
            height[i] < height[x]?small = height[i]:small = height[x];
            console.log(small + " and " + Math.abs(x - i) +  " = " + small * Math.abs(x - i)) 
            if(small * Math.abs(x - i) > results){
                results = small * Math.abs(x -i)
            }
        }
    }
    return results

};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))