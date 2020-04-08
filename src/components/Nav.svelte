<script>
  import { slide } from 'svelte/transition';
  export let segment;
  let collapsed = false;

  const navigation = [
    {
      id:'home',
      link:'.',
      name: 'Home',
      description:'Home Page',
    },

    {
      id:'quarantine',
      link:'/quarantine',
      name:'Quarantine Log',
      description:'Poetry and Foolishness',
    },

    {
      id:'research',
      link:'/research',
      name:'Research Blog',
      description:'User Interface Research',
    },

    {
      id:'warrior',
      link:'/warrior',
      name:'Book',
      description:'A Book About Growing Up',
    },



    {
      id:'palette',
      link:'/palette',
      name:'Palette',
      description:'Color Palette Designer',
    },

    {
      id:'theme',
      link:'/theme',
      name:'Theme',
      description:'User Interface Theme',
    },

    {
      id:'daw',
      link:'/daw',
      name:'Composer',
      description:'Digital Audio Workstation',
    },

    {
      id:'video',
      link:'/video?p=0&i=8',
      name:'Videos',
      description:'Favorite Videos',
    },

    {
      id:'wall',
      link:'/wall',
      name: 'Wall',
      description:'Video Wall (not for mobile devices)',
    }
  ];

</script>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow mb-4 d-none d-lg-flex">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <div class="navbar-collapse">
    <ul class="navbar-nav mr-auto">

    {#each navigation as item, i}
      <li class="nav-item" class:active='{ (segment?segment:'home')===item.id }'>
        <a class="nav-link" rel=prefetch href={item.link} title={item.description}>{item.name}</a>
      </li>
    {/each}

    </ul>
  </div>

</nav>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow mb-4 d-lg-none">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <button class="navbar-toggler border-0" type="button" on:click={()=>collapsed =! collapsed} class:collapsed={collapsed}>
    <span class="navbar-toggler-icon"></span>
  </button>

  {#if collapsed}
    <div class="navbar-collapse" in:slide={{ duration: 1500 }} out:slide={{ duration: 500 }}>
      <ul class="navbar-nav mr-auto">

      {#each navigation as item, i}
        <li class="nav-item" class:active='{ (segment?segment:'home')===item.id }'>
          <a class="nav-link" rel=prefetch href={item.link} title={item.description}>{item.name} &middot; <small class="text-muted">{item.description}</small></a>
        </li>
      {/each}

      </ul>
    </div>
  {/if}

</nav>
