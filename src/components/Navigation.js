import React from "react";
import styled from "styled-components";

import "../styles/Navigation.css";
// import $ from "jquery";

const Navigation = styled.nav`
  /* min-width: 320px; */
  background-color: ${(props) => props.theme.colors.blue.normal};
`;

const Wraper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`;

const VisibleLinks = styled.ul`
  display: inline-table;
`;

const NavigationMenu = styled.li`
  display: table-cell;
  border-left: 1px solid ${(props) => props.theme.colors.blue.normal};
`;

const Item = styled.a`
  display: block;
  color: #fff;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.blue.normal};
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

function Navigation2() {
  return (
    // <nav class="greedy-nav">
    //   {/* <button>
    //     <div class="hamburger"></div>
    //   </button> */}
    //   <div class="container-xl">
    //     <ul class="visible-links">
    //       <li>
    //         <a href="#">Home</a>
    //       </li>
    //       <li>
    //         <a href="#">About</a>
    //       </li>
    //       <li>
    //         <a href="#">Services</a>
    //       </li>
    //       <li>
    //         <a href="#">Doctors</a>
    //       </li>
    //       <li>
    //         <a href="#">Pricing</a>
    //       </li>
    //       <li>
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul>
    //   </div>

    //   <ul class="hidden-links hidden"></ul>
    // </nav>
    <Navigation>
      <Wraper>
        <VisibleLinks>
          <NavigationMenu>
            <Item>Home </Item>
          </NavigationMenu>
          <NavigationMenu>
            <Item>About </Item>
          </NavigationMenu>
          <NavigationMenu>
            <Item>Services </Item>
          </NavigationMenu>
          <NavigationMenu>
            <Item>Doctors </Item>
          </NavigationMenu>
          <NavigationMenu>
            <Item>Pricing </Item>
          </NavigationMenu>
          <NavigationMenu>
            <Item>Contact </Item>
          </NavigationMenu>
        </VisibleLinks>
      </Wraper>
    </Navigation>
  );
}

export default Navigation2;

// var $nav = $(".greedy-nav");
//   var $btn = $(".greedy-nav button");
//   var $vlinks = $(".greedy-nav .visible-links");
//   var $hlinks = $(".greedy-nav .hidden-links");

//   var breaks = [];

//   function updateNav() {
//     var availableSpace = $btn.hasClass("hidden")
//       ? $nav.width()
//       : $nav.width() - $btn.width() - 30;

//     // The visible list is overflowing the nav
//     if ($vlinks.width() > availableSpace) {
//       // Record the width of the list
//       breaks.push($vlinks.width());

//       // Move item to the hidden list
//       $vlinks.children().last().prependTo($hlinks);

//       // Show the dropdown btn
//       if ($btn.hasClass("hidden")) {
//         $btn.removeClass("hidden");
//       }

//       // The visible list is not overflowing
//     } else {
//       // There is space for another item in the nav
//       if (availableSpace > breaks[breaks.length - 1]) {
//         // Move the item to the visible list
//         $hlinks.children().first().appendTo($vlinks);
//         breaks.pop();
//       }

//       // Hide the dropdown btn if hidden list is empty
//       if (breaks.length < 1) {
//         $btn.addClass("hidden");
//         $hlinks.addClass("hidden");
//       }
//     }

//     // Keep counter updated
//     $btn.attr("count", breaks.length);

//     // Recur if the visible list is still overflowing the nav
//     if ($vlinks.width() > availableSpace) {
//       updateNav();
//     }
//   }

//   // Window listeners

//   $(window).resize(function () {
//     updateNav();
//   });

//   $btn.on("click", function () {
//     $hlinks.toggleClass("hidden");
//   });

//   updateNav();
