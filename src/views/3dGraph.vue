<script setup lang="ts">
  import ForceGraph3D from '3d-force-graph';
  import ForceGraphAR from '3d-force-graph-ar';
  import { onMounted } from 'vue';


  function initGraph () {
    // Random tree
    const N = 300;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id-1))
        }))
    };

    const Graph = ForceGraph3D()
      (document.getElementById('3d-graph')!)
        .graphData(gData);
  }

  function initARGraph () {
    const N = 40;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
      }))
    };

    const Graph = ForceGraphAR()
    const myDom = (document.getElementById('3d-graph2')!)

    Graph(myDom).graphData(gData)
        .linkDirectionalArrowLength(8)
        .linkDirectionalArrowRelPos(1)
        .linkCurvature(0.25)

        .nodeRelSize(10)
        .linkWidth(1)
        .nodeOpacity(0.9)
        .linkOpacity(0.4)
        .nodeColor(() => 'firebrick')
        .linkColor(() => 'darkgrey');
  }
  onMounted(() => {
    console.log('mounted');
    // initGraph()
    initARGraph()
  })
</script>

<template>
  <div style="display:flex;justify-center">
    <div id="3d-graph"></div>
    <div id="3d-graph2" style="margin: 0 auto"></div>
  </div>
</template>

<style scoped>
  
</style>
