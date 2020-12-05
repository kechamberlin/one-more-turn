import path, { resolve } from 'path';

async function turnCivsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const civilizationTemplate = path.resolve('./src/templates/Civilization.js');
  // 2. Query all Civs
  const { data } = await graphql(`
    query {
      civilizations: allSanityCivilization {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each civ and create a page for that civ
  data.civilizations.nodes.forEach((civ) => {
    actions.createPage({
      // URL for this new page
      path: `civilization/${civ.slug.current}`,
      component: civilizationTemplate,
      context: {
        slug: civ.slug.current,
      },
    });
  });
}

async function turnVictoriesIntoPages({ graphql, actions }) {
  console.log('Turning the victories into pages');
  // 1. Get the template
  const victoryTemplate = path.resolve('./src/pages/civilizations.js');
  // 2. Query all the victories
  const { data } = await graphql(`
    query {
      victories: allSanityVictory {
        nodes {
          name
          id
        }
      }
    }
  `);
  // 3. Create Page for that victory
  data.victories.nodes.forEach((victory) => {
    console.log(`Creating page for victory`, victory.name);
    actions.createPage({
      path: `victory/${victory.name}`,
      component: victoryTemplate,
      context: {
        victory: victory.name,
        // TODO Regex for victory
      },
    });
  });
  // 4. Pass victory data to Civilization.js
}

async function turnDistrictsIntoPages({ graphql, actions }) {
  // 1. Query all Districts
  const { data } = await graphql(`
    query {
      specialty: allSanityDistrict {
        totalCount
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 2. Turn each District into their own page
  data.specialty.nodes.forEach((district) => {
    actions.createPage({
      component: resolve('./src/templates/District.js'),
      path: `/district/${district.slug.current}`,
      context: {
        name: district.name,
        slug: district.slug.current,
      },
    });
  });
  // 3. Figure out how many pages there are based on how many Districts there are and how many per page
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.specialty.totalCount / pageSize);
  console.log(
    `There are ${data.specialty.totalCount} total Districts and ${pageCount} pages with ${pageSize} per page `
  );
  // 4. Loop over from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`Creating page ${i}`);
    actions.createPage({
      path: `/districts/${i + 1}`,
      component: path.resolve('./src/pages/districts.js'),
      // This data is passed to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnCivsIntoPages(params),
    turnVictoriesIntoPages(params),
    turnDistrictsIntoPages(params),
  ]);
  // 1. Civilizations
  // 2. Victories
  // 3. Districts
}
