<script>
  import { slide } from 'svelte/transition';

  import Icon from '../controls/Icon.svelte';

  export let segment;

  export let bulb;
  export let night;
  export let allowance;

  let minute = 1000*60 ;

  let eyestrain = 12 * minute;

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


  ];

</script>

<nav class="navbar navbar-light bg-primary bg-night text-night navbar-expand-lg shadow d-none d-lg-flex mb-3">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>



  <div class="navbar-collapse">
    <ul class="navbar-nav mr-auto">

    {#each navigation as item, i}
      <li class="nav-item" class:active='{ (segment?segment:'home')===item.id }'>
        <a class="nav-link text-night" rel=prefetch href={item.link} title={item.description}>{item.name}</a>
      </li>
    {/each}

    </ul>
  </div>

  {#if bulb}
    <div>
      <button type="button" class="btn btn-sm" class:btn-primary={!night} class:btn-dark={night} class:active={night} on:click={()=>{night=!night;allowance=eyestrain}}>
        <Icon name="light-bulb" color={night?'primary':'light'}/>
      </button>
    </div>
  {/if}

</nav>

<nav class="navbar navbar-light bg-primary bg-night text-night navbar-expand-lg shadow d-lg-none mb-3">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>
  {#if bulb}
    <div>
      <button type="button" class="btn btn-sm" class:btn-primary={!night} class:btn-dark={night} class:active={night} on:click={()=>{night=!night;allowance=eyestrain}}>
        <Icon name="light-bulb" size=16 color={night?'primary':'light'}/>
      </button>
    </div>
  {/if}
  <button class="navbar-toggler border-0" type="button" on:click={()=>collapsed =! collapsed} class:collapsed={collapsed}>
    <span class="navbar-toggler-icon"></span>
  </button>

  {#if collapsed}
    <div class="navbar-collapse" in:slide={{ duration: 1500 }} out:slide={{ duration: 500 }}>
      <ul class="navbar-nav mr-auto">

      {#each navigation as item, i}
        <li class="nav-item" class:active='{ (segment?segment:'home')===item.id }'>
          <a class="nav-link text-night" rel=prefetch href={item.link} title={item.description}>{item.name} &middot; <small>{item.description}</small></a>
        </li>
      {/each}

      </ul>
    </div>
  {/if}

</nav>
