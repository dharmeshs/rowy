import { makeStyles, createStyles } from "@mui/styles";
import { alpha, darken, lighten } from "@mui/material";
import { APP_BAR_HEIGHT } from "components/Navigation";
import { DRAWER_COLLAPSED_WIDTH } from "components/SideDrawer";

import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/lch";
extend([mixPlugin]);

export const useStyles = makeStyles((theme) =>
  createStyles({
    tableWrapper: {
      display: "flex",
      flexDirection: "column",
      height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,

      "& > .rdg": {
        width: `calc(100% - ${DRAWER_COLLAPSED_WIDTH}px)`,
        flex: 1,
        paddingBottom: `max(env(safe-area-inset-bottom), ${theme.spacing(2)})`,
      },

      [theme.breakpoints.down("sm")]: { width: "100%" },
    },

    loadingContainer: {
      position: "sticky",
      left: 0,
      height: 100,
    },

    "@global": {
      ".rdg.rdg": {
        "--color": theme.palette.text.primary,
        "--border-color": theme.palette.divider,
        // "--summary-border-color": "#aaa",
        "--background-color":
          theme.palette.mode === "light"
            ? theme.palette.background.paper
            : colord(theme.palette.background.paper)
                .mix("#fff", 0.04)
                .alpha(1)
                .toHslString(),
        "--header-background-color": theme.palette.background.default,
        "--row-hover-background-color": colord(theme.palette.background.paper)
          .mix(theme.palette.action.hover, theme.palette.action.hoverOpacity)
          .alpha(1)
          .toHslString(),
        "--row-selected-background-color":
          theme.palette.mode === "light"
            ? lighten(theme.palette.primary.main, 0.9)
            : darken(theme.palette.primary.main, 0.8),
        "--row-selected-hover-background-color":
          theme.palette.mode === "light"
            ? lighten(theme.palette.primary.main, 0.8)
            : darken(theme.palette.primary.main, 0.7),
        "--checkbox-color": theme.palette.primary.main,
        "--checkbox-focus-color": theme.palette.primary.main,
        "--checkbox-disabled-border-color": "#ccc",
        "--checkbox-disabled-background-color": "#ddd",
        "--selection-color": theme.palette.primary.main,
        "--font-size": "0.75rem",
        "--cell-padding": theme.spacing(0, 1.25),

        border: "none",
        backgroundColor: "transparent",

        ...theme.typography.caption,
        // fontSize: "0.8125rem",
        lineHeight: "inherit !important",

        "& .rdg-cell": {
          display: "flex",
          alignItems: "center",
          padding: 0,

          overflow: "visible",
          contain: "none",
          position: "relative",

          lineHeight: "calc(var(--row-height) - 1px)",
        },

        "& .rdg-cell-frozen": {
          position: "sticky",
        },
        "& .rdg-cell-frozen-last": {
          boxShadow: theme.shadows[2]
            .replace(/, 0 (\d+px)/g, ", $1 0")
            .split("),")
            .slice(1)
            .join("),"),
        },

        "& .rdg-cell-copied": {
          backgroundColor:
            theme.palette.mode === "light"
              ? lighten(theme.palette.primary.main, 0.7)
              : darken(theme.palette.primary.main, 0.6),
        },
      },

      ".rdg-row, .rdg-header-row": {
        marginLeft: `max(env(safe-area-inset-left), ${theme.spacing(2)})`,
        marginRight: `env(safe-area-inset-right)`,
      },

      ".rdg-header-row .rdg-cell:first-child": {
        borderTopLeftRadius: theme.shape.borderRadius,
      },

      ".rdg-row .rdg-cell:first-child, .rdg-header-row .rdg-cell:first-child": {
        borderLeft: "1px solid var(--border-color)",
      },

      ".rdg-row:last-child": {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,

        "& .rdg-cell:first-child": {
          borderBottomLeftRadius: theme.shape.borderRadius,
        },
        "& .rdg-cell:nth-last-child(2)": {
          borderBottomRightRadius: theme.shape.borderRadius,
        },
      },

      ".rdg-header-row .rdg-cell": {
        borderTop: "1px solid var(--border-color)",
      },

      ".rdg-row:hover": { color: theme.palette.text.primary },

      ".row-hover-iconButton": {
        color: theme.palette.text.disabled,
        transitionDuration: "0s",

        ".rdg-row:hover &": {
          color: theme.palette.text.primary,
          backgroundColor: alpha(
            theme.palette.action.hover,
            theme.palette.action.hoverOpacity * 1.5
          ),
        },
      },

      ".cell-collapse-padding": {
        margin: theme.spacing(0, -1.25),
        width: `calc(100% + ${theme.spacing(1.25 * 2)})`,
      },
    },
  })
);

export default useStyles;
