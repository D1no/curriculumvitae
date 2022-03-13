import { Briefcase, Lightbulb, MoreVertical, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import NavigationItem from "./Item";
import NavigationTrackLine from "./TrackLine";

import { x } from "@xstyled/emotion";

import { FixedBottom } from "@ui/views/Layout/FixedBottom";
import { L, LayoutProps } from "@ui/views/Layout/util";

export interface NavigationProps {
  /**
   * Hides the Navigation by setting CSS Display="none". Component is not unmounted.
   */
  hide?: boolean;
}

/**
 * Main (bottom) Navigation which is used in the default fullscreen Layout.
 */
const Navigation: React.FC<LayoutProps & NavigationProps> = ({
  debug = false,
  hide = false,
  ...props
}) => {
  // TODO: This should be solved by constructing a custom react-router link
  // See: https://reactrouter.com/docs/en/v6/api#uselinkclickhandler
  // Implementation: https://github.com/remix-run/react-router/blob/d32662ddd67d489a46171b450ec933a0ce88d346/packages/react-router-dom/index.tsx#L251
  const navigate = useNavigate();
  const handleNavigationTo = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    target: string,
  ) => {
    e.preventDefault();
    navigate(target, { replace: true });
  };

  return (
    <L debug={debug}>
      {/* TODO: This still gets stuck on navigation. Probably the only way to really solve
                the floating navbar problem is attaching an event listener to the resize.
                https://stackoverflow.com/a/28162474
      */}
      <FixedBottom>
        <x.nav
          w="100%"
          display={hide ? "none" : undefined}
          flex="none"
          px={2}
          py={3}
          position="fixed"
          bottom="offset"
        >
          <NavigationTrackLine />
          <L debug={debug}>
            <x.div row textAlign="center">
              <NavigationItem
                onClick={(e) => handleNavigationTo(e, "/")}
                col={4 / 12}
                debug={debug}
                opacity={1}
                size="2rem"
                svgIcon={<Lightbulb />}
                cursor="pointer"
              >
                introduction
              </NavigationItem>
              <NavigationItem
                onClick={(e) => handleNavigationTo(e, "/showcase")}
                col={4 / 12}
                debug={debug}
                opacity={1}
                size="2rem"
                svgIcon={<Briefcase />}
                cursor="pointer"
              >
                showcase
              </NavigationItem>
              <NavigationItem
                onClick={(e) => handleNavigationTo(e, "/about")}
                col={3 / 12}
                debug={debug}
                opacity={1}
                size="2rem"
                svgIcon={<Phone />}
                cursor="pointer"
              >
                about me
              </NavigationItem>
              <L debug={debug}>
                <x.div
                  alignItems="center"
                  col={1 / 12}
                  display="flex"
                  justifyContent="center"
                  pl={1 / 12}
                >
                  <L>
                    <MoreVertical
                      opacity={0.5}
                      size="2rem"
                      strokeWidth="0.032rem"
                      style={{
                        display: "block",
                      }}
                    />
                  </L>
                </x.div>
              </L>
            </x.div>
          </L>
        </x.nav>
      </FixedBottom>
    </L>
  );
};

export default Navigation;
