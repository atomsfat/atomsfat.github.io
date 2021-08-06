# Quick-R: Graphical Parameters


install -c r rstudio --yes


# Graphical Parameters

You can customize many features of your graphs (fonts, colors, axes, titles) through graphic options.

One way is to specify these options in through the **par( )** function. If you set parameter values here, the changes will be in effect for the rest of the session or until you change them again. The format is **par(*optionname*=***value***,** ***optionname*=***value***,** ...**)**

# Set a graphical parameter using par()

par() # view current settings

opar <- par() # make a copy of current settings

par(col.lab="red") # red x and y labels

hist(mtcars$mpg) # create a plot with these new settings

par(opar) # restore original settings

A second way to specify graphical parameters is by providing the ***optionname***=*value* pairs directly to a high level plotting function. In this case, the options are only in effect for that specific graph.

# Set a graphical parameter within the plotting function

hist(mtcars$mpg, col.lab="red")

See the help for a specific high level plotting function (e.g. plot, hist, boxplot) to determine which graphical parameters can be set this way.

The remainder of this section describes some of the more important graphical parameters that you can set.

# Text and Symbol Size

The following options can be used to control text and symbol size in graphs.

[Untitled](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/Untitled%20Database%201cfa88dbd9804102ad996b00a55da361.csv)

# Plotting Symbols

Use the **pch=** option to specify symbols to use when plotting points. For symbols 21 through 25, specify border color (col=) and fill color (bg=).

[Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled)

# Lines

You can change lines using the following options. This is particularly useful for reference lines, axes, and fit lines.

[Untitled](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/Untitled%20Database%20a4d981e44d67460db012591cf0ddd68e.csv)

[Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled%201](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled%201)

# Colors

Options that specify colors include the following.

[Untitled](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/Untitled%20Database%2008eee8417ae84c438c90948228870792.csv)

You can specify colors in R by index, name, hexadecimal, or RGB.

For example **col=1**, **col="white"**, and **col="#FFFFFF"** are equivalent.

The following chart was produced with code developed by Earl F. Glynn. See his [Color Chart](http://research.stowers-institute.org/efg/R/Color/Chart/index.htm) for all the details you would ever need about using colors in R.

[Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled%202](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled%202)

You can also create a vector of *n* contiguous colors using the functions **rainbow(***n***)**, **heat.colors(***n***)**, **terrain.colors(***n***)**, **topo.colors(***n***)**, and **cm.colors(***n***)**.

**colors()** returns all available color names.

# Fonts

You can easily set font size and style, but font family is a bit more complicated.

[Untitled](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/Untitled%20Database%20cb41cb0fb9864f5f87ac5f4d81ab010a.csv)

In windows, mono is mapped to "TT Courier New", serif is mapped to"TT Times New Roman", sans is mapped to "TT Arial", mono is mapped to "TT Courier New", and symbol is mapped to "TT Symbol" (TT=True Type). You can add your own mappings.

# Type family examples - creating new mappings

plot(1:10,1:10,type="n")

windowsFonts(

A=windowsFont("Arial Black"),

B=windowsFont("Bookman Old Style"),

C=windowsFont("Comic Sans MS"),

D=windowsFont("Symbol")

)

text(3,3,"Hello World Default")

text(4,4,family="A","Hello World from Arial Black")

text(5,5,family="B","Hello World from Bookman Old Style")

text(6,6,family="C","Hello World from Comic Sans MS")

text(7,7,family="D", "Hello World from Symbol")

click to view

[Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled%203](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/untitled%203)

# Margins and Graph Size

You can control the margin size using the following parameters.

[Untitled](Quick-R%20Graphical%20Parameters%20b58b573d1b4f460eb0a0aae04f02cb79/Untitled%20Database%205a7f0571b573452d84860a46320809f5.csv)

For complete information on margins, see Earl F. Glynn's [margin tutorial](http://research.stowers-institute.org/efg/R/Graphics/Basics/mar-oma/index.htm).

# Going Further

See **help(par)** for more information on graphical parameters. The customization of plotting axes and text annotations are covered [next section](https://www.statmethods.net/advgraphs/axes.html).

# To Practice

Try [this course on making graphs in R.](https://www.datacamp.com/courses/data-visualization-in-r)